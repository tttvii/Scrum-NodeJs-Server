module.exports = mongoose => {
    // định nghĩa cấu trúc bảng
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    // tên bảng
    const Tasks = mongoose.model("Tasks", schema);
    return Tasks;
  };