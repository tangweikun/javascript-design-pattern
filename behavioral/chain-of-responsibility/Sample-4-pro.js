function leaveRequest(days) {
  return handleByDirector(days);
}

// 主管处理该请假申请
function handleByDirector() {
  const result = Math.random() > 0.5 ? "reject" : "accept";
  if (result === "reject") {
    return result;
  }
  if (days < 3) {
    return "accept";
  }
  return handleByManager();
}

// 经理处理该请假申请
function handleByManager() {
  const result = Math.random() > 0.5 ? "reject" : "accept";
  if (result === "reject") {
    return result;
  }
  if (days < 5) {
    return "accept";
  }
  return handleByTopManager();
}

// 总经理处理该请假申请
function handleByTopManager() {
  const result = Math.random() > 0.5 ? "reject" : "accept";
  return result;
}
