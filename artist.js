class Artist {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.priceInCents = 0;
        this.songsList = [];
    }

    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`;
    }

    currencyFormat(numInCents) {
        return `${(numInCents / 100).toFixed(2)} ${this.currency}`;
    }

    songPrice(priceInCents) {
        this.priceInCents = priceInCents;
        return `${this.name}'s price per song is ${this.currencyFormat(this.priceInCents)};`;
    }

    addSong(songTitle) {
        this.songsList.push({
            title: songTitle,
            count: 0,
        });
        return `Prideta daina: ${songTitle}.`;
    }

    playlist() {
        const firstLine = `${this.name}'s playlist:`;
        let maxLength = firstLine.length;
        let list = [];
        for (let i = 0; i < this.songsList.length; i++) {
            const { title, count } = this.songsList[i];
            list.push(`${i + 1}. ${title} (${count})`);
            if (list[i].length > maxLength) {
                maxLength = list[i].length;
            }
        }
        return `${firstLine}\r\n${'='.repeat(maxLength)}\r\n${list.join('\r\n')}`;
        // return `${[firstLine, '='.repeat(maxLength), list.join('\r\n')].join('\r\n')}`;
    }

    playSong(songIndex) {
        this.songsList[songIndex].count++;
        return `Playing song: ${this.songsList[songIndex].title}.`;
    }

    fortune() {

        return ``;
    }
}

module.exports = Artist;