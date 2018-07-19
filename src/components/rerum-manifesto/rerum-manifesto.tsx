import { Component, Prop, Event, EventEmitter, Listen, State } from '@stencil/core';
import { EventEmitterData } from '../../../node_modules/@stencil/core/dist/declarations';

@Component({
  tag: 'rerum-manifesto',
  styleUrl: 'rerum-manifesto.css',
  shadow: true
})
export class RerumManifesto {

  // @Prop({ context: 'isServer' }) private isServer: boolean;
  @Prop() manifestUrl: string;

  @Event() loadedManifest: EventEmitter;
  @Listen('loadedManifest')
  loadedManifestHandler(ev: EventEmitterData){
    this.viewManifest(ev.detail);
  }

  @State() currentManifest: Manifesto.IIIIFResource | null;
    viewManifest(m: Manifesto.IIIIFResource | null) {
      this.currentManifest = m;
    }

  @State() manifestLoadState = "No URI present";

  render() {
    return (
      <div>
        Hello, World! I'm {this.manifestUrl}
        <strong>
          {this.currentManifest ? this.currentManifest.getLabel() : this.manifestLoadState}
        </strong>
      </div>
    );
  }
  componentDidLoad() {
    // Dummy:
    const url = this.manifestUrl || "http://wellcomelibrary.org/iiif/b18035723/manifest";

    // TODO: incorporate Manifesto... the initial attempt failed typescript importing.
//    if (this.isServer === false) {
      manifesto.loadManifest(url).then((data)=> {
        this.viewManifest(manifesto.create(data));
        this.loadedManifest.emit(data);
      });
      this.manifestLoadState = "Loading manifest..."
//    }
  }
}
