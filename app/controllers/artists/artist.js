import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSong: function(e){
      e.preventDefault();
      var price = this.get('price');
      var title = this.get('songName');
      var createdBy = this.get('createdBy');

      console.log(title, price, createdBy);

      var promise =$.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/songs',
        data: {
          title: title,
          artist: this.get('model.artistId'),
          genre: 3,
          price: price,
          createdBy: createdBy
        }
      });
      //  var controller = this;
      //  promise.then(function(){
      //   controller.set('songName','');
      //   controller.set('createdBy','');
      //   controller.set('price','');

//or
        promise.then((response) => {
         this.set('songName','');
         this.set('createdBy','');
         this.set('price','');

         var songs = this.get('model.songs');
        //  songs.pushObject(response.song);

         var newSongs = songs.concat(response.song);
         this.set('model.songs',newSongs);

         
      }, function() {
        console.log('error');
        alert('ERROR - song already exists');
      });
    }
  }
});
