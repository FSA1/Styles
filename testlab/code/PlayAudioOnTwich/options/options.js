function save_options() {
  var terms = document.getElementById('terms').checked;
  var grigor = document.getElementById('grigor').checked;
  var laughs = document.getElementById('laughs').checked;
  var greetings = document.getElementById('greetings').checked;
  var lvolume = document.getElementById('lvolume').valueAsNumber;
  var gvolume = document.getElementById('gvolume').valueAsNumber;
  var mvolume = document.getElementById('mvolume').valueAsNumber;

  chrome.storage.local.set({
    //audio types
    chatWords: terms,
    channelGrigor: grigor,
    laughsAudio: laughs,
    greetingAudio: greetings,
    //volume level
    laughsVol: lvolume,
    greetingVol: gvolume,
    miscellaneousVol: mvolume
  }, function () {
  });
}

function restore_options() {
  // Default values
  chrome.storage.local.get({
    //audio types
    chatWords: true,
    channelGrigor: true,
    laughsAudio: true,
    greetingAudio: true,
    //volume level
    laughsVol: 0.4,
    greetingVol: 1.0,
    miscellaneousVol: 1.0,
    retroActive: false
  }, function (items) {
    document.getElementById('terms').checked = items.chatWords;
    document.getElementById('grigor').checked = items.channelGrigor;
    document.getElementById('laughs').checked = items.laughsAudio;
    document.getElementById('greetings').checked = items.greetingAudio;
    document.getElementById('lvolume').valueAsNumber = items.laughsVol;
    document.getElementById('gvolume').valueAsNumber = items.greetingVol;
    document.getElementById('mvolume').valueAsNumber = items.miscellaneousVol;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('terms').addEventListener('change', save_options);
document.getElementById('grigor').addEventListener('change', save_options);
document.getElementById('laughs').addEventListener('change', save_options);
document.getElementById('greetings').addEventListener('change', save_options);
document.getElementById('lvolume').addEventListener('change', save_options);
document.getElementById('gvolume').addEventListener('change', save_options);
document.getElementById('mvolume').addEventListener('change', save_options);