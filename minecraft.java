import java.util.Scanner;

public class MinecraftCrafting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem vindo a bancada de trabalho do Minecraft!!!");
        System.out.println("Você precisa de 2 diamantes e 1 graveto para criar uma espada de diamante.");

        System.out.print("Quantos diamantes você tem? ");
        int diamantes = scanner.nextInt();

        System.out.print("Quantos gravetos você tem? ");
        int gravetos = scanner.nextInt();

        // Verificação com erro de lógica
        if (diamantes < 2 || gravetos < 1 || (diamantes > 2 && gravetos > 1)) {
            System.out.println("Você não tem os itens necessários para criar uma espada de diamante.");
        } else {
            System.out.println("Parabéns! Você criou uma espada de diamante!");
        }

        scanner.close();
    }
}

