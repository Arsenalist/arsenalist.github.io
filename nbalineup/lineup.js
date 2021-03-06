$(function() {

    var messages = [
        "Oh boy, we gonna rock the opposition.",
        "Lord have mercy!",
        "I feel sorry for the other team.",
        "Sweet Mother of God, should we even bother playing this game?",
        "72-10 Bulls better watch out.",
        "This lineup could beat GSW in Game 7 on the road.",
        "Wait a minute - is this lineup even fair?",
        "Get out the Salami and Cheese mama!",
        "This lineup has been deemed unfair by NATO.",
        "Trump would use an Executive Order on this lineup.",
        "Bill Russell says this lineup could beat his Celtics.",
        "Wait, are you serious? Would the NBA even allow this lineup?",
        "Put a cup of tea on, this lineup about to entertain.",
        "Tell your girl you gonna be home late tonight, we gonna dance.",
        "After watching this lineup, you still miss DeMar DeRozan?",
        "We about to drop some Bombs over Baghdad.",
        "This lineup can walk like an Egyptian.",
        "This team could win the Premier League.",
        "We're about to go on a 16-0 run.",
        "John Wall just pissed his pants.",
        "Draymond Green says this lineup has five DPOYs in it.",
        "Ladies and Gentleman, your All-NBA First Team.",
        "Makes you wonder if there is a God.",
        "A licky boom-boom down.",
        "To learn to overcome the heartaches and pain.",
        "This lineup raw like cocaine straight from Bolivia.",
        "We about to terrorize the jam like troops in Pakistan."
    ];

    function Player(id, name, versatility, headshot) {
        this.id = id;
        this.name = name;
        this.versatility = versatility;
        this.headshot = headshot;
    }

    function createRoster() {
        var team = [];
        team.push(new Player(39061, 'P. Siakam', [2, 3, 4, 5], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/39061/w192xh192_headshot.png'));
        team.push(new Player(4200, 'K. Leonard', [1, 2, 3, 4, 5], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/4200/w192xh192_headshot.png'));
        team.push(new Player(11051, 'J. Valanciunas', [4, 5], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11051/w192xh192_headshot.png'));
        team.push(new Player(160, 'K. Lowry', [1, 2], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/160/w192xh192_headshot.png'));
        team.push(new Player(83, 'D. Green', [1, 2, 3], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/83/w192xh192_headshot.png'));
        team.push(new Player(348, 'S. Ibaka', [3, 4, 5], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/348/w192xh192_headshot.png'));
        team.push(new Player(46480, 'O. Anunoby', [1, 2, 3, 4], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46480/w192xh192_headshot.png'));
        team.push(new Player(25275, 'F. VanVleet', [1, 2], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/25275/w192xh192_headshot.png'));
        team.push(new Player(479, 'C.J Miles', [2, 3, 4], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/479/w192xh192_headshot.png'));
        team.push(new Player(12144, 'N. Powell', [1, 2, 3], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12144/w192xh192_headshot.png'));
        team.push(new Player(30765, 'D. Wright', [1, 2, 3], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30765/w192xh192_headshot.png'));
        //team.push(new Player(1965, 'G. Monroe', [5], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/1965/w192xh192_headshot.png'));
        team.push(new Player(5831, 'L. Brown', [1, 2], 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5831/w192xh192_headshot.png'));
        return team;
    }

function filterByPosition(position, roster) {
    return _.filter(roster, function(o) {
        if (_.includes(o.versatility, position)) return o;
    });
}

function selectPosition(position, roster) {
    var positionPlayers = filterByPosition(position, roster);
    return positionPlayers[Math.floor(Math.random() * positionPlayers.length)];
}

function createRandomLineup() {
    var myRoster = createRoster();
    var lineup = [];
    for (var i=1; i<=5; i++) {
        var player = selectPosition(i, myRoster);
        _.remove(myRoster, {'id': player.id});
        lineup.push(player);
    }
    return lineup;
}

function displayLineup() {
    var randomLineup = createRandomLineup();
    var str = '<table><tr>';
    var positionLabels = ['PG', 'SG', 'SF', 'PF', 'C'];
    for (var i=0; i<randomLineup.length; i++) {
        var p = randomLineup[i];
        str += '<td><center><img class="img-fluid" src="' + p.headshot + '"/><br/>' + p.name + '<br/>' + positionLabels[i] + '</center></td>';
    }
    str += '</tr></table>';

    $('#lineup-result').html(str);
}
function showMessage() {
        $('#message').html(messages[Math.floor(Math.random() * messages.length)]);
}

$('#create-lineup-btn').click(function(){
    displayLineup();
    showMessage();
    return false;
});
displayLineup();
});


