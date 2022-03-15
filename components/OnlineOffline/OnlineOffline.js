

function OnlineOffline() {
    var amOnline = new Firebase('https://<demo>.firebaseio.com/.info/connected');
    var userRef = new Firebase('https://<demo>.firebaseio.com/presence/' + userid);
    amOnline.on('value', function(snapshot) {
      if (snapshot.val()) {
        userRef.onDisconnect().remove();
        userRef.set(true);
      }
    });
}

export default OnlineOffline;
