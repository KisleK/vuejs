document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue ({
    el: '#app',
    data: { 
            message: 'To-Do!',
            tasks: [
                    'Wake up!',
                    'Go to school!',
                    'Go home!'
                    ],
          newTask: ''
    },
    methods: {
      addTask: function() {
        if (this.newTask !== '') {
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1);
        
      }
    }
  });
});