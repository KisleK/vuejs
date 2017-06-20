  document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      peoples: [],
      newPersonName: '',
      newPersonBio: ''       
    },
    mounted: function() {
      $.get('/api/v1/peoples.json', function(peoplesResponse) {
        this.people = peoplesResponse;
      }.bind(this));
    },
    methods: {
      toggleBio: function(people) {
        people.bioVisible = !people.bioVisible;
      },
      addPerson: function() {
        var params = {
                          name: this.newPersonName
                          bio: this.newPersonBio
                          
                        };

        $.post('/api/v1/peoples.json', params, function(newPerson) {
           this.peoples.push(newPerson);
           this.newPersonName = '';
           this.newPersonBio = '';

        }.bind(this));

      },
      deletePerson: function(people) {
        var index = this.peoples.indexOf(people)
        this.peoples.splice(index, 1)
      }
    }
  });
});