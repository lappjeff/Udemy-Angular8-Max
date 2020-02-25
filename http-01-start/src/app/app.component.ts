import { PostsService } from "./posts.service";
import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { Post } from "./post.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(data => {
      this.isFetching = false;
      this.loadedPosts = data;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(data => {
      this.isFetching = false;
      this.loadedPosts = data;
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
