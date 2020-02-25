import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("request is on its way, intercepted");
    const modifiedRequest = req.clone({
      headers: req.headers.append("Authkey", "xyz")
    });
    return next.handle(req);
  }
}
