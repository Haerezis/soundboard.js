import { computed, shallowRef } from "vue";
import { routes } from "./routes"



const current = shallowRef()
const current_route = computed(() => current.value)



function path_to_regexp(path: string) {
  const tokens = path.split("/").filter((token) => token.charAt(0) == ":").map((token) => token.substring(1))
  tokens.forEach((token) => { path = path.replace(`:${token}`, `(?<${token}>[^\/]*)`) })
  return new RegExp(`^${path}[\/]?$`)
}

function build_path(name: string, params?: Record<string, any>) {
  const route = routes.find((route) => route.name == name)
  if (!route) {
    return null
  }

  let path = `${route.path}`
  Object.entries(params ?? {}).forEach(([k, v]) => (path = path.replace(`:${k}`, v)))

  return path
}

function navigate(name: string, params?: Record<string, any>) {
  const path = build_path(name, params) ?? ""
  if (path) {
    window.location.hash = path
  }
}

function is_active(name: string, params?: Record<string, any>) {
  const path = build_path(name, params) ?? ""
  return current.value?.path == path
}

const routes_with_regexp = routes.map((route) => {
  return {
    path_regexp: path_to_regexp(route.path),
    alias_regexp: route.alias ? path_to_regexp(route.alias) : undefined,
    route: route
  }
})
function refresh() {
  const hashurl = location.hash.substring(1) || "/"

  const success = routes_with_regexp.some((route) => {
    const res = route.path_regexp.exec(hashurl) ?? route.alias_regexp?.exec(hashurl)
    if (res) {
      current.value = {
        name: route.route.name,
        path: hashurl,
        params: res.groups ?? {},
        component: route.route.component
      }
      return true
    }
  })
  if (!success) {
    current.value = null
  }
}


window.addEventListener("hashchange", refresh)
refresh()


export { current_route, is_active, navigate, refresh }
