import ncp from 'ncp';

export default function(source, destination) {
  return new Promise((resolve, reject) => {
    ncp.limit = 16;
    ncp(source, destination, function(err) {
      if (err) {
        reject(new Error(err));
      } else {
        resolve();
      }
    });
  });
}
