function isPalindrome(s: string): boolean {

    // Convert to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Check palindrome
    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {

        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Example 1
console.log("This is a palindrome-A man, a plan, a canal: Panama: " + isPalindrome("A man, a plan, a canal: Panama"));

// Example 2
console.log("This is a palindrome-Race a car: " + isPalindrome("race a car"));