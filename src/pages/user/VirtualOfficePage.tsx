import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Volume2, Monitor, Settings } from "lucide-react";

function VirtualRoom() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1f2e" />
      </mesh>
      
      {/* Desk */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 0.1, 1.5]} />
          <meshStandardMaterial color="#2a3142" />
        </mesh>
      </Float>
      
      {/* Virtual Screen */}
      <mesh position={[0, 1, -0.5]}>
        <boxGeometry args={[2.5, 1.5, 0.05]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Avatar placeholder */}
      <Float speed={2} rotationIntensity={0.5}>
        <mesh position={[-3, 0.5, 2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.5}>
        <mesh position={[3, 0.5, 2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
      </Float>
    </group>
  );
}

export default function VirtualOfficePage() {
  return (
    <DashboardLayout userType="user">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">Virtual Office</h1>
            <p className="text-muted-foreground">Your immersive 3D workspace</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Volume2 className="w-4 h-4 mr-2" />Audio</Button>
            <Button variant="outline" size="sm"><Settings className="w-4 h-4 mr-2" />Settings</Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="h-[500px] bg-gradient-to-b from-card to-background">
            <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <VirtualRoom />
              <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} />
              <Environment preset="night" />
            </Canvas>
          </div>
        </Card>

        <div className="grid sm:grid-cols-3 gap-4">
          <Card variant="interactive"><CardContent className="p-4 flex items-center gap-3"><Users className="w-5 h-5 text-primary" /><div><p className="font-medium">3 Online</p><p className="text-xs text-muted-foreground">In this space</p></div></CardContent></Card>
          <Card variant="interactive"><CardContent className="p-4 flex items-center gap-3"><Monitor className="w-5 h-5 text-primary" /><div><p className="font-medium">Screen Share</p><p className="text-xs text-muted-foreground">Click to share</p></div></CardContent></Card>
          <Card variant="interactive"><CardContent className="p-4 flex items-center gap-3"><Volume2 className="w-5 h-5 text-success" /><div><p className="font-medium">Spatial Audio</p><p className="text-xs text-muted-foreground">Enabled</p></div></CardContent></Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
