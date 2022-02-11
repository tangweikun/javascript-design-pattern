const methods = [handleByDirector, handleByManager, handleByTopManager];

function leaveRequest(days, methods) {
  const fn = methods[0];
  const result = fn?.(days);

  if (result === "next") {
    return leaveRequest(days, methods.slice(1));
  }

  return result;
}

// 主管处理该请假申请
function handleByDirector(days) {
  const result = Math.random() > 0.7 ? "reject" : "accept";
  if (result === "reject") {
    return result;
  }
  if (days < 3) {
    return "accept";
  }

  return "next";
}

// 经理处理该请假申请
function handleByManager(days) {
  const result = Math.random() > 0.7 ? "reject" : "accept";
  if (result === "reject") {
    return result;
  }
  if (days < 5) {
    return "accept";
  }

  return "next";
}

// 总经理处理该请假申请
function handleByTopManager() {
  const result = Math.random() > 0.7 ? "reject" : "accept";
  return result;
}

const res = leaveRequest(16, methods);
console.log(res);
