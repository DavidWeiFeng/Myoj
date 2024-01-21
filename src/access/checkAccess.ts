import ACCESS_ENUM from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前用户具有的权限
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //如果用户没有登录
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果需要管理员权限
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess != ACCESS_ENUM.ADMIN) {
      return false;
    }
    return true;
  }
};
export default checkAccess;
