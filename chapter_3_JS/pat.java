public class pat {
    public static void main(String[] args) {
        int[] counts = {6, 4, 2, 1};
        int max = 0;
        for (int n : counts) if (n > max) max = n;
        for (int c : counts) {
            // print leading spaces to center the row
            for (int s = 0; s < (max - c); s++) System.out.print(" ");
            for (int i = 0; i < c; i++) System.out.print("* ");
            System.out.println();
        }
    }
}
