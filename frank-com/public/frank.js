window.xxx = (data) => {
  console.log(data);
};
const script = document.createElement("script");
script.src = "http://qq.com:8888/friend.js";
document.body.appendChild(script);
