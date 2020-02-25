import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Post } from "./post.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  baseUrl = "https://ng-complete-guide-39db7.firebaseio.com/";
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{ name: string }>(`${this.baseUrl}/posts.json`, postData)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    // example of attaching multiple params
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("custom", "key");

    return this.http
      .get<{ [key: string]: Post }>(`${this.baseUrl}/posts.json`, {
        headers: new HttpHeaders({ "Custom-Header": "Hello" }),
        params: searchParams
      })
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
    // catchError(error => {
    //   // not doing anything currently
    //   return throwError(error);
    // })
  }

  deletePosts() {
    return this.http.delete(`${this.baseUrl}/posts.json`);
  }
}
