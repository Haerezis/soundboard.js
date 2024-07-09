class SoundBlob {
  url: string;
  fetch_init: RequestInit;
  blob?: Blob;
  extname?: string;
  blob_url?: string;

  constructor(url: string, init: RequestInit = {}) {
    this.url = url
    this.fetch_init = init
  }

  async load() {
    this.blob = await fetch(this.url, this.fetch_init).then((r) => r.blob())
    this.blob_url = URL.createObjectURL(this.blob)
    this.extname = this.find_extname()
  }

  find_extname(): string {
    const url = this.url.split("?", 1)[0]
    let regex_res = /^data:audio\/([^;,]+);/i.exec(url);
    if (!regex_res) {
      regex_res = /\.([^.]+)$/.exec(url);
    }

    let ext: string | null = null;
    if (regex_res) {
      ext = regex_res[1].toLowerCase();
    }

    if (!ext && this.blob?.type) {
      ext = SoundBlob.MIME_TYPES[this.blob.type]
    }

    return ext ?? ""
  }

  static MIME_TYPES: Record<string, string> = {
    'audio/mpeg': 'mp3',
    'audio/mp3': 'mp3',

    'audio/ogg': 'ogg',
    'audio/ogg; codecs="vorbis"': 'ogg',

    'audio/ogg; codecs="opus"': 'opus',

    'audio/wav; codecs="1"': 'wav',
    'audio/wav': 'wav',

    'audio/aac': 'aac',

    'audio/x-caf': 'caf',

    'audio/x-m4a': 'm4a',
    'audio/m4a': 'm4a',

    'audio/x-m4b': 'm4b',
    'audio/m4b': 'm4b',

    'audio/x-mp4': 'mp4',
    'audio/mp4': 'mp4',

    'audio/webm; codecs="vorbis"': 'webm',

    'audio/mp4; codecs="ec-3"': 'dolby',

    'audio/x-flac': 'flac',
    'audio/flac': 'flac',
  }
}

export default SoundBlob
