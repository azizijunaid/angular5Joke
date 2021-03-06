import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../Joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  @Input('joke') data: Joke;

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
    ];
  }
}
