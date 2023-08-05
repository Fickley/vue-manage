import router from "@/routes"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({ showSpinner: false })

// 后期导航菜单权限可以进行校验
router.beforeEach((to, from, next) => {
  NProgress.start(); 
  if (!!localStorage.getItem('token') && to.path === "/login") {
    next('/')
  } else if (!localStorage.getItem('token') && to.path !== "/login") {
    next('/login')
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done();
});