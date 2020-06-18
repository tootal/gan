export default {
  focus: {
    inserted: function (el) {
      if (el.classList.contains('el-input')) {
        el.querySelector('input').focus()
      } else {
        el.focus()
      }
    }
  }
}