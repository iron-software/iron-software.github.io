from colorama import init, Fore, Style

class StatusLogger:

    @staticmethod
    def progress(message: str):
        print(f"{Fore.BLUE}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def title(message: str):
        print(f"{Fore.YELLOW}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def warning(message: str):
        print(f"{Fore.LIGHTGREEN_EX}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def error(message: str):
        print(f"{Fore.RED}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def debug(message: str):
        print(f"{Fore.CYAN}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def success(message: str):
        print(f"{Fore.GREEN}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def info(message: str):
        print(f"{Fore.LIGHTWHITE_EX}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def notice(message: str):
        print(f"{Fore.LIGHTYELLOW_EX}", message, f"{Style.RESET_ALL}")

    @staticmethod
    def message(message: str):
        print(f"{Fore.WHITE}", message, f"{Style.RESET_ALL}")