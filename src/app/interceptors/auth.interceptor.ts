import { HttpInterceptorFn } from '@angular/common/http';

// req -> current request... if i want to modify anything
// next -> move to next interceptor or to next steps which is calling api
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Use interceptor to log the request inside our console
  

  let token = localStorage.getItem("token");
  console.log(token)
  if (token !== null) {
    let stringToken = JSON.parse(token!)["token"];

    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${stringToken}` }
    })
    console.log(authReq)
    return next(authReq);
  }
  else {
    console.log(req)
    return next(req);
  }
};
