import { TestWindow } from '@stencil/core/dist/testing';
import { RerumManifest } from './rr-manifest';

describe('rr', () => {
  it('should build', () => {
    expect(new RerumManifest()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRrManifestoElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RerumManifest],
        html: '<rr-manifesto></rr-manifesto>'
      });
    });

    // it('should work without parameters', () => {
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    // });

    it('should work with a url', async () => {
      element.manifestUrl = 'http://wellcomelibrary.org/iiif/b18035723/manifest';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m http://wellcomelibrary.org/iiif/b18035723/manifest');
    });

    // it('should work with a last name', async () => {
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    // });

    // it('should work with both a first and a last name', async () => {
    //   element.first = 'Peter';
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    // });
  });
});
