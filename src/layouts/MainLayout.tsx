import { Outlet } from 'react-router-dom';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '@/components/Navbar/Logo';

export default function MainLayout() {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
          header={{ height: 60 }}
          padding="md"
          navbar={{
            width: 250,
              breakpoint: 'sm',
            collapsed: {
              desktop: !opened,
                mobile: !opened,
            },
          }}
        >
            <AppShell.Header
              display="flex"
              px="lg"
              style={{
                alignItems: 'center',
                gap: 20,

            }}>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  size="sm"
                />
                <Logo />
            </AppShell.Header>

            <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}
