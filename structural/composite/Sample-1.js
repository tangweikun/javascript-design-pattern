class File {
  constructor(name) {
    this.name = name
  }

  display() {
    console.log(this.name)
  }
}

class Directory {
  constructor(name) {
    this.name = name
    this.files = []
  }

  add(file) {
    this.files.push(file)
  }
  remove(file) {
    for (let i = 0, length = this.files.length; i < length; i++) {
      if (this.files[i] === file) {
        this.files.splice(i, 1)
        return true
      }
    }

    return false
  }

  getFileName(index) {
    return this.files[index].name
  }

  display() {
    console.log(this.name)
    for (let i = 0, length = this.files.length; i < length; i++) {
      console.log('   ', this.getFileName(i))
    }
  }
}

directoryOne = new Directory('Directory One')
directoryTwo = new Directory('Directory Two')
directoryThree = new Directory('Directory Three')

fileOne = new File('File One')
fileTwo = new File('File Two')
fileThree = new File('File Three')

directoryOne.add(fileOne)
directoryOne.add(fileTwo)

directoryTwo.add(fileOne)

directoryThree.add(fileOne)
directoryThree.add(fileTwo)
directoryThree.add(fileThree)

directoryOne.display()
directoryTwo.display()
directoryThree.display()
