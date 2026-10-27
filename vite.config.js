import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	input: {
		home: resolve(import.meta.dirname, 'index.html'),
		work: resolve(import.meta.dirname, 'work.html'),
		about: resolve(import.meta.dirname, 'about.html'),
		contact: resolve(import.meta.dirname, 'contact.html'),
		project: resolve(import.meta.dirname, 'project.html'),
	},
});

// The entry names must be unique.
