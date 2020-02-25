import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  baseUrl = "https://ng-complete-guide-39db7.firebaseio.com/";

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{ name: string }>(`${this.baseUrl}/posts.json`, postData)
      .subscribe(data => {
        console.log(data);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(`${this.baseUrl}/posts.json`)
      .pipe(
        map(data => {
          let postsArray: Post[] = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              postsArray.push({ ...data[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(`${this.baseUrl}/posts.json`);
  }
}
