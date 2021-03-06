import { Component, OnInit, Input } from '@angular/core';
import {Joke} from '../Joke';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input('joke') data: Joke;
}
