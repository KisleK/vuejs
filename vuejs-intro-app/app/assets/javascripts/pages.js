// information must here to run vue

document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app', 
    data: {
      message: 'Hello Vue!',
      reviews: [
                {
                  text: "Vue.js is so cool"
                  rating: 8
                  reviewer: "Josh"
                },
                {
                  text: "You're so functional Vue.js",
                  rating: 10
                  reviewer: "Jay"
                }
                {
                  text: "I miss Angular.js",
                  rating: 3,
                  reviewer: "Peter"
                }
                ],

      newReviewText: ''
      newReviewRating: ''
      newReviewReviewer: ''
    },

    methods: {
      addReview: function() {
        if (this.newReviewText !== '' && this.newReviewRating !== '' && this.newReviewReviewer !== '') {
          var reviewObj = {
                            text: this.newReviewText,
                            rating: this.newReviewText,
                            reviewer: this.newReviewReviewer
                          };
          this.reviews.push(reviewObj);
          
          this.newReviewText = '';
          this.newReviewRating = '';
          this.newReviewReviewer = '';
        }
      },
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1
      }
    }
  });
});