module.exports = {
  getVolume: () => {
    return Promise.resolve({
      data: [
        {
          id: "lmifitrsr",
          title: "Terripin Station"
        }
      ]
    });
  },

  getList: () => {
    return Promise.resolve({
      data: [
        {
          id: "first",
          title: "number1"
        },
        {
          id: "second",
          title: "number2"
        },
        {
          id: "third",
          title: "number3"
        }
      ]
    });
  }
};
