mp.events.add('check', (player, params) => {
    console.log('event triggered with params:', params);
});

mp.events.addCommand('progress', (player) => {
    player.call('progress:start', [1, 'Runs Progress Bar', 'server', 'check', JSON.stringify({
        somedata: 'right here'
    })]);
});