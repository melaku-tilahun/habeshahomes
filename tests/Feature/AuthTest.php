<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register_as_guest(): void
    {
        $response = $this->postJson(route('auth.register'), [
            'name' => 'Abebe Bikila',
            'email' => 'abebe@example.com',
            'phone' => '+251911223344',
            'password' => 'SecurePass123!',
            'password_confirmation' => 'SecurePass123!',
            'user_type' => 'guest',
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'status',
                'message',
                'user' => ['id', 'name', 'email', 'user_type'],
                'token',
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'abebe@example.com',
            'user_type' => 'guest',
        ]);
    }

    public function test_user_can_login_and_receive_token(): void
    {
        $user = User::factory()->create([
            'email' => 'selam@example.com',
            'password' => bcrypt('StrongPass123!'),
        ]);

        $response = $this->postJson(route('auth.login'), [
            'email' => 'selam@example.com',
            'password' => 'StrongPass123!',
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'status',
                'token',
                'user',
            ]);
    }

    public function test_authenticated_user_can_access_me_profile(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user, 'sanctum')
            ->getJson(route('auth.me'));

        $response->assertStatus(200)
            ->assertJson([
                'status' => 'success',
                'user' => [
                    'id' => $user->id,
                    'email' => $user->email,
                ],
            ]);
    }

    public function test_user_can_logout(): void
    {
        $user = User::factory()->create();
        $token = $user->createToken('test_token')->plainTextToken;

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
            ->postJson(route('auth.logout'));

        $response->assertStatus(200)
            ->assertJson(['status' => 'success']);

        $this->assertDatabaseCount('personal_access_tokens', 0);
    }
}
