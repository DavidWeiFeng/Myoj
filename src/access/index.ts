import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  // 仅管理员可见，判断当前用户是否有权限
  const loginUser = store.state.user.loginUser;
  //如果之前没有登录，就自动登录
  if (!loginUser || !loginUser.userRole) {
    console.log("你还么有自动登陆过");
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果没登录，就跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      console.log("你现在去自动登陆");
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }

    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
