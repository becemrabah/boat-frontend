import { Component } from '@angular/core';
import { BoatControlService } from '../../services/boat-control.service';

@Component({
  selector: 'app-boat-panel',
  standalone: true,
  imports: [],
  templateUrl: './boat-panel.component.html',
  styleUrls: ['./boat-panel.component.css'],
})
export class BoatPanelComponent {
  constructor(private boatService: BoatControlService) {}

  moveForward() {
    this.boatService.sendCommand('1');
  }

  reverse() {
    this.boatService.sendCommand('5');
  }

  stop() {
    this.boatService.sendCommand('0');
  }

  turnLeft() {
    this.boatService.sendCommand('2');
  }

  turnRight() {
    this.boatService.sendCommand('3');
  }

  centerRudder() {
    this.boatService.sendCommand('4');
  }
}
