import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface ExampleSource {
  html: string;
  ts: string;
  data: string;
  scss: string;
}

const EMPTY_SOURCE: ExampleSource = {
  html: '',
  ts: '',
  data: '',
  scss: ''
};

@Component({
  standalone: false,
  selector: 'app-example-source',
  templateUrl: './example-source.component.html',
  styleUrls: ['./example-source.component.scss']
})
export class ExampleSourceComponent implements OnChanges {
  @Input() slug = '';

  loading = false;
  source: ExampleSource = EMPTY_SOURCE;

  constructor(private readonly http: HttpClient) {}

  ngOnChanges() {
    if (!this.slug) {
      this.source = EMPTY_SOURCE;
      return;
    }

    this.loading = true;

    forkJoin({
      html: this.loadFile(`${this.slug}.component.html`).pipe(map((content) => this.extractDropdownMarkup(content))),
      ts: this.loadFile(`${this.slug}.component.ts`).pipe(map((content) => this.stripGeneratedSourcePanel(content))),
      data: this.loadFile(`${this.slug}.data.ts`),
      scss: this.loadFile(`${this.slug}.component.scss`)
    }).subscribe((source) => {
      this.source = source;
      this.loading = false;
    });
  }

  private loadFile(fileName: string) {
    return this.http
      .get(`source/examples/${this.slug}/${fileName}`, { responseType: 'text' })
      .pipe(catchError(() => of('')));
  }

  private extractDropdownMarkup(content: string) {
    const matches = content.match(/<angular-multiselect[\s\S]*?<\/angular-multiselect>/g);
    return this.stripIndent(matches ? matches.join('\n\n') : content);
  }

  private stripGeneratedSourcePanel(content: string) {
    return this.stripIndent(
      content
        .replace(/^\s*readonly\s+(htmlSnippet|tsSnippet|dataSnippet|scssSnippet|stackBlitzUrl|availableSkins)\s*=.*;\n/gm, '')
        .replace(/^\s*readonly\s+skins\s*=.*;\n/gm, '')
    );
  }

  private stripIndent(content: string) {
    const lines = content.replace(/\s+$/g, '').split('\n');
    while (lines.length && !lines[0].trim()) {
      lines.shift();
    }
    while (lines.length && !lines[lines.length - 1].trim()) {
      lines.pop();
    }

    const indent = lines
      .filter((line) => line.trim())
      .reduce((min, line) => Math.min(min, line.match(/^\s*/)?.[0].length || 0), Number.POSITIVE_INFINITY);

    return lines.map((line) => line.slice(Number.isFinite(indent) ? indent : 0)).join('\n');
  }
}
