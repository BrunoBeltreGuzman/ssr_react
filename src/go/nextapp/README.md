# App SSR React

Usage of Server-side rendering in react apps

# Init

build next app and copy foldel `out` in root folder go sercer
config foldel paht static file in go server `rice.MustFindBox("foldel_name")`

Example:

```go
routers.PathPrefix("/").Handler(http.FileServer(rice.MustFindBox("out").HTTPBox()))
```

`view file app.go`

# Run

```console
$ go install
```

```console
$ rice embed-go
```

```console
$ go run .
```

**Run Full**

```console
$  go install && rice embed-go && go run .
```

**Run Dev**

```console
$  rice embed-go && go run .
```
