import { Injectable } from '@angular/core';
import mqtt from 'mqtt';
@Injectable({
  providedIn: 'root',
})
export class BoatControlService {
  private client!: any;
  private brokerUrl = 'wss://broker.hivemq.com:8884/mqtt'; // 👈 Pulled from environment
  private topic = 'boat/control/field1'; // 👈 Pulled from environment

  constructor() {
    this.connect();
  }

  private connect() {
    const clientId = `angular_boat_web_${Math.random().toString(16).substring(2, 10)}`;

    // 🔥 Pull connect explicitly out of the default module structure
    const mqttConnect = (mqtt as any).connect || mqtt;

    this.client = mqttConnect(this.brokerUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
    });

    this.client.on('connect', () => {
      console.log(`🚀 Angular connected to HiveMQ Broker: ${this.brokerUrl}`);
    });

    this.client.on('error', (err: any) => {
      console.error('MQTT Connection error:', err);
    });
  }

  sendCommand(command: string) {
    if (this.client && this.client.connected) {
      this.client.publish(this.topic, command, { qos: 0 }, (err: any) => {
        if (err) {
          console.error('Publish error:', err);
        } else {
          console.log(`📡 Published [${command}] to topic [${this.topic}]`);
        }
      });
    } else {
      console.warn('MQTT client not connected. Command dropped.');
    }
  }
}
