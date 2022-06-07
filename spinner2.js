process.stdout.write('hello from spinner2.js... \rheyyy\n');
let cursors = "|/-\|/-\|/-\||";
let delay = 100;
for (let cursor of cursors) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${cursor}   `);
  }, delay);
}
setTimeout(() => {
  console.log("");
}, delay);
