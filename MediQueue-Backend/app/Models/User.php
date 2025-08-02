<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // A patient can have many appointments
    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'patient_id');
    }

    // A user can receive many notifications
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    // A user can give many reviews
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
