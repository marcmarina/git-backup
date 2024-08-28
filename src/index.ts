import git from 'simple-git';
import dayjs from 'dayjs';

async function main() {
  const status = await git().status(['-s']);

  const isClean = status.isClean();

  const formattedDate = dayjs().format('YYYY-MM-DD HH:mm:ss');

  if (isClean) {
    console.log(formattedDate, 'No backup needed');
  } else {
    git().add('.');

    git().commit(`Backup ${formattedDate}`);

    git().pull('--rebase');

    console.log('Backup complete', formattedDate);
  }
}

main();
