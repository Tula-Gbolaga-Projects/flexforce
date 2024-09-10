const STATUS = {
  PENDING: "PENDING",
  IDLE: "IDLE",
  REJECTED: "REJECTED",
  RESOLVED: "RESOLVED",
};

const tokenKey = "flexforce-token";
const loginKey = "flexforce-lastLogin";
const redirectKey = "flexforce-redirect";
const userIdKey = "flexforce-userid";
const roleKey = "flexforce-role";

const timeString = (x) => {
  return new Date(x).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export {
  STATUS,
  tokenKey,
  loginKey,
  redirectKey,
  userIdKey,
  roleKey,
  timeString,
};
