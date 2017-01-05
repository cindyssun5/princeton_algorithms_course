const WeightedQuickUnionUF = function (N) {
  this.id = [];
  this.size = [];
  for (let i = 0; i < N; i++) {
    this.id[i] = i;
    this.size[i] = 1;
  }
  this.count = N;
};

WeightedQuickUnionUF.prototype.connected = function (n, m) {
  const nRoot = this.find(n);
  const mRoot = this.find(m);

  if (nRoot === mRoot) {
    return true;
  }
  return false;
};

WeightedQuickUnionUF.prototype.count = function () {
  return this.count;
};

WeightedQuickUnionUF.prototype.find = function (n) {
  while (n !== this.id[n]) {
    n = this.id[n];
  }
  return n;
};

WeightedQuickUnionUF.prototype.union = function (n, m) {
  const nRoot = this.find(n);
  const mRoot = this.find(m);

  if (this.size[nRoot] >= this.size[mRoot]) {
    this.id[m] = nRoot;
    this.size[nRoot] += this.size[m];
  } else {
    this.id[n] = mRoot;
    this.size[mRoot] += this.size[n];
  }
  this.count--;
};

