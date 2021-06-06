# Example Client Web

Go SSR App React

# Init

build React app and copy foldel `build` in root folder go sercer
config foldel paht static file in go server `rice.MustFindBox("foldel_name")`

Example:

```go
routers.PathPrefix("/").Handler(http.FileServer(rice.MustFindBox("build").HTTPBox()))
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
