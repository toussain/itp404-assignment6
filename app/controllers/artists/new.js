import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(e){
      e.preventDefault();
      var name = this.get('artistName');

      console.log(name);

      var promise =$.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          name: name
        }
      });
        promise.then((response) => {
         this.set('name','');

         var artists = this.get('model.artists');
         artists.pushObject(response.artist);

        console.log('success');
        alert(name + ' has been sucessfully added to the artist list');

      }, function() {
        console.log('error');
        alert('ERROR - Artist already exists');
      });
      this.transitionToRoute('artists');

    }
  }
});
