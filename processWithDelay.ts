async function processWithDelay(numbers: number[]): Promise<void> {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      throw new Error("Array must contain only numbers");
    }
  }

  if (numbers.length === 0) {
    return Promise.resolve();
  }

  for (let i = 0; i < numbers.length; i++) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`After ${i + 1} second${i > 0 ? "s" : ""}`);
        console.log(numbers[i]);
        resolve();
      }, (i + 1) * 1000);
    });
  }
}

processWithDelay([1, 2, 3, 4, 5])
  .then(() => {
    console.log("All numbers processed");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
