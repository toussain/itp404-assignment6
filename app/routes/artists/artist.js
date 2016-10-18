import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var artist = params.id;
    var promise = $.ajax({
      type: 'get',
      url: 'http://itp-api.herokuapp.com/api/artists/'+ artist + '/songs'

    }).then(function(response){
      return {
        artistId: response.artists[0].id,
        artistName: response.artists[0].name,
        songs: response.songs
      }

    })

    return promise;

  }
});
