# App SSR React

Usage of Server-side rendering in react apps

# Init

**Configure**

```C#
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
       app.UseStaticFiles();
}
```

Create foldel `wwwroot`

Build react app and copy all files in foldel `build` them paste in root folder `wwwroot` ASP.NET Core server
