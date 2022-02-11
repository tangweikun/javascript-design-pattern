// bad
function leaveRequest(days) {
  const resultByDirector = handleByDirector();
  if (resultByDirector === "reject") {
    return "reject";
  }
  if (days < 3) {
    return "accept";
  }

  const resultByManager = handleByManager();
  if (resultByManager === "reject") {
    return "reject";
  }
  if (days < 5) {
    return "accept";
  }

  const resultByTopManager = handleByTopManager();
  if (resultByTopManager === "reject") {
    return "reject";
  }
  return "accept";
}

// 主管处理该请假申请
function handleByDirector() {
  return Math.random() > 0.5 ? "reject" : "accept";
}

// 经理处理该请假申请
function handleByManager() {
  return Math.random() > 0.5 ? "reject" : "accept";
}

// 总经理处理该请假申请
function handleByTopManager() {
  return Math.random() > 0.5 ? "reject" : "accept";
}
