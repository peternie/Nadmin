export default [
  {
    url: "/mock/getUser",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: ["tom", "jerry"]
      };
    }
  }
];
